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
                            docker tag example-backend nexus.se.telenor.net:4444/backstage/backstage-backend
                            docker tag spotify/backstage nexus.se.telenor.net:4444/backstage/backstage-frontend
                            docker push nexus.se.telenor.net:4444/backstage/backstage-backend
                            docker push nexus.se.telenor.net:4444/backstage/backstage-frontend
                        '''
                    }
                }
                stage('Restart Backstage node in AWS') {
                    steps {
                        withAmazon {
                            echo 'Restarted the AWS node, that also reprovisions it'
                        }
                    }
                }
            }
        }
    }
}