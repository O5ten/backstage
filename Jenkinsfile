library 'stable'
pipeline {
    agent {
        label 'linux'
    }
    tools {
        nodejs 'NodeJS v12.13.0-linux-x64 LTS'
    }
    stages {
        stage('build') {
            stages {
                stage('Environment') {
                    steps {
                        withNpmConfig {
                            sh 'npm i -g yarn'
                        }
                    }
                }
                stage('Install') {
                    steps {
                        sh '''
                            yarn install
                            yarn tsc
                            yarn build
                        '''
                    }
                }
            }
        }
        stage('Delivery') {
            when {
                branch 'develop'
            }
            stages {
                stage('Package') {
                    steps {
                        sh '''
                            yarn docker-build
                            yarn docker-build:app
                        '''
                    }
                }
                stage('Publish') {
                    steps {
                        sh '''
                            docker tag example-backend nexus.se.telenor.net:4444/backstage/backstage-backend:latest
                            docker tag spotify/backstage nexus.se.telenor.net:4444/backstage/backstage-frontend:latest
                            docker push nexus.se.telenor.net:4444/backstage/backstage-backend:latest
                            docker push nexus.se.telenor.net:4444/backstage/backstage-frontend:latest
                        '''
                    }
                }
                stage('Restart Backstage node in AWS') {
                    environment {
                        INSTANCE_ID='i-0a38e4c0fe26b9c18'
                    }
                    steps {
                        withAmazon(credentialsId: 'TELENOR_SE_DEVSUPPORT_DERP_JENKINS') {
                            catchError {//If it was already off then this may fail.
                                sh """
                                    aws ec2 stop-instances --instance-ids $INSTANCE_ID
                                    aws ec2 wait instance-stopped --instance-ids $INSTANCE_ID
                                """
                            }
                            sh """
                                aws ec2 start-instances --instance-ids $INSTANCE_ID
                                aws ec2 wait instance-status-ok --instance-ids $INSTANCE_ID
                            """
                        }
                    }
                }
                stage('Verify Backstage Status') {
                    steps {
                        script {
                            timeout(time: 5, unit: 'MINUTES') {
                                waitUntil {
                                    httpRequest(url: 'http://10.82.7.71').status == 200
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}