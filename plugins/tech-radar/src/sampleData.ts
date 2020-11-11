/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not target this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  RadarRing,
  RadarQuadrant,
  RadarEntry,
  TechRadarLoaderResponse,
} from './api';

const rings = new Array<RadarRing>();
rings.push({ id: 'target', name: 'TARGET', color: '#93c47d' });
rings.push({ id: 'pilot', name: 'PILOT', color: '#93d2c2' });
rings.push({ id: 'exit', name: 'EXIT', color: '#fbdb84' });

const quadrants = new Array<RadarQuadrant>();
quadrants.push({ id: 'languages', name: 'Languages and Frameworks' });
quadrants.push({ id: 'datastore', name: 'Datastore' });
quadrants.push({ id: 'cicd', name: 'CI/CD and Infrastructure' });
quadrants.push({ id: 'observability', name: 'Security and Observability' });

const entries = new Array<RadarEntry>();
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#21995d' },
  url: '#',
  key: 'javascript',
  id: 'javascript',
  title: 'JavaScript',
  quadrant: { id: 'languages', name: 'Languages' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#FF0000' },
  url: '#',
  key: 'java',
  id: 'java',
  title: 'Java (OpenJDK)',
  quadrant: { id: 'languages', name: 'Languages' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'dotnet',
  id: 'dotnet',
  title: 'C# .NET',
  quadrant: { id: 'languages', name: 'Languages' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'python',
  id: 'python',
  title: 'Python3',
  quadrant: { id: 'languages', name: 'Languages' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'vue',
  id: 'vue',
  title: 'Vue',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'springboot',
  id: 'springboot',
  title: 'Spring Boot',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'kotlin',
  id: 'kotlin',
  title: 'Kotlin (app)',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'contentful',
  id: 'contentful',
  title: 'Contentful CMS',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'dotnet',
  id: 'dotnet',
  title: 'dotnet core',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'apigee',
  id: 'apigee',
  title: 'Apigee',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'rabbitmq',
  id: 'rabbitmq',
  title: 'RabbitMQ',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'pilot', name: 'PILOT', color: '#772299' },
  url: '#',
  key: 'graphql',
  id: 'graphql',
  title: 'GraphQL',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'pilot', name: 'PILOT', color: '#772299' },
  url: '#',
  key: 'epicms',
  id: 'epicms',
  title: 'Epi CMS decoupled',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'pilot', name: 'PILOT', color: '#772299' },
  url: '#',
  key: 'django',
  id: 'django',
  title: 'Django',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'pilot', name: 'PILOT', color: '#772299' },
  url: '#',
  key: 'aws-sns-sqs',
  id: 'aws-sns-sqs',
  title: 'AWS SNS/SQS',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'dotnet-framework',
  id: 'dotnet-framework',
  title: '.NET Framework',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'jsp-struts',
  id: 'jsp-struts',
  title: 'JSP/Struts',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'jquery',
  id: 'jquery',
  title: 'JQuery',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'powerbuilder',
  id: 'powerbuilder',
  title: 'Powerbuilder',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'angularjs',
  id: 'angularjs',
  title: 'Angular JS',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'tridion',
  id: 'tridion',
  title: 'Tridion CMS',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'vbnet',
  id: 'vbnet',
  title: 'VB.NET',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'tibco',
  id: 'tibco',
  title: 'Tibco',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'webmethods',
  id: 'webmethods',
  title: 'Webmethods',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'proiv',
  id: 'proiv',
  title: 'ProIV',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'ccpp',
  id: 'ccpp',
  title: 'C/C++',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'java-oracle',
  id: 'java-oracle',
  title: 'Java (OracleJDK)',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'custom-scripts',
  id: 'custom-scripts',
  title: 'Custom Scripts',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'proprietary-languages',
  id: 'proprietary-languages',
  title: 'Proprietary Languages',
  quadrant: { id: 'languages', name: 'Frameworks' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'postgres',
  id: 'postgres',
  title: 'Postgres (AWS RDS)',
  quadrant: { id: 'datastore', name: 'Datastore' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'oracle',
  id: 'oracle',
  title: 'Oracle (on-prem)',
  quadrant: { id: 'datastore', name: 'Datastore' },
});
entries.push({
  moved: 0,
  ring: { id: 'pilot', name: 'PILOT', color: '#772299' },
  url: '#',
  key: 'dynamodb',
  id: 'dynamodb',
  title: 'DynamoDB (AWS)',
  quadrant: { id: 'datastore', name: 'Datastore' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'sqlserver',
  id: 'sqlserver',
  title: 'SQLServer',
  quadrant: { id: 'datastore', name: 'Datastore' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'mysql',
  id: 'mysql',
  title: 'MySQL',
  quadrant: { id: 'datastore', name: 'Datastore' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'mongodb',
  id: 'mongodb',
  title: 'MongoDB',
  quadrant: { id: 'datastore', name: 'Datastore' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'jenkins',
  id: 'jenkins',
  title: 'Jenkins',
  quadrant: { id: 'cicd', name: 'CI/CD' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'github',
  id: 'github',
  title: 'GitHub Enterprise',
  quadrant: { id: 'cicd', name: 'CI/CD' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'nexus',
  id: 'nexus',
  title: 'SonaType Nexus',
  quadrant: { id: 'cicd', name: 'CI/CD' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'sonarqube',
  id: 'sonarqube',
  title: 'SonarQube',
  quadrant: { id: 'cicd', name: 'CI/CD' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'desktop',
  id: 'desktop',
  title: 'Desktop Builds',
  quadrant: { id: 'cicd', name: 'CI/CD' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'desktop-jenkins',
  id: 'desktop-jenkins',
  title: 'Desktop Jenkins',
  quadrant: { id: 'cicd', name: 'CI/CD' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'teamcity',
  id: 'teamcity',
  title: 'TeamCity',
  quadrant: { id: 'cicd', name: 'CI/CD' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'others',
  id: 'others',
  title: 'Others',
  quadrant: { id: 'cicd', name: 'CI/CD' },
});
entries.push({
  moved: 0,
  ring: { id: 'pilot', name: 'PILOT', color: '#772299' },
  url: '#',
  key: 'serverless',
  id: 'serverless',
  title: 'Serverless',
  quadrant: { id: 'cicd', name: 'CI/CD' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'paas',
  id: 'paas',
  title: 'Containers on PaaS',
  quadrant: { id: 'cicd', name: 'CI/CD' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'ec2',
  id: 'ec2',
  title: 'EC2 on AWS',
  quadrant: { id: 'cicd', name: 'CI/CD' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'on-prem-vm-ware',
  id: 'on-prem-vm-ware',
  title: 'On-premise VMware',
  quadrant: { id: 'cicd', name: 'CI/CD' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'on-prem-vm-ware',
  id: 'on-prem-vm-ware',
  title: 'On-premise VMware',
  quadrant: { id: 'cicd', name: 'CI/CD' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'ansible',
  id: 'ansible',
  title: 'Ansible',
  quadrant: { id: 'cicd', name: 'CI/CD' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'cloudformation',
  id: 'cloudformation',
  title: 'CloudFormation',
  quadrant: { id: 'cicd', name: 'CI/CD' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'custom-logging',
  id: 'custom-logging',
  title: 'Custom Logging',
  quadrant: { id: 'observability', name: 'Security and Observability' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'appdynamics',
  id: 'appdynamics',
  title: 'AppDynamics APM',
  quadrant: { id: 'observability', name: 'Security and Observability' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'secrets-in-deployments',
  id: 'secrets-in-deployments',
  title: 'Secrets in deployment files',
  quadrant: { id: 'observability', name: 'Security and Observability' },
});
entries.push({
  moved: 0,
  ring: { id: 'exit', name: 'EXIT', color: '#772299' },
  url: '#',
  key: 'poor-visibility-of-security-issues',
  id: 'poor-visibility-of-security-issues',
  title: 'Poor Visibility of Security Issues',
  quadrant: { id: 'observability', name: 'Security and Observability' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'kubernetes-secrets',
  id: 'kubernetes-secrets',
  title: 'Kubernetes Secrets',
  quadrant: { id: 'observability', name: 'Security and Observability' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'sonarqube',
  id: 'sonarqube',
  title: 'SonarQube',
  quadrant: { id: 'observability', name: 'Security and Observability' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'owasp-zap',
  id: 'owasp-zap',
  title: 'OWASP Zap',
  quadrant: { id: 'observability', name: 'Security and Observability' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'defect-dojo',
  id: 'defect-dojo',
  title: 'Defect Dojo',
  quadrant: { id: 'observability', name: 'Security and Observability' },
});
entries.push({
  moved: 0,
  ring: { id: 'pilot', name: 'PILOT', color: '#772299' },
  url: '#',
  key: 'vault',
  id: 'vault',
  title: 'HashiCorp Vault',
  quadrant: { id: 'observability', name: 'Security and Observability' },
});
entries.push({
  moved: 0,
  ring: { id: 'pilot', name: 'PILOT', color: '#772299' },
  url: '#',
  key: 'conjur',
  id: 'conjur',
  title: 'Cyberark Conjur',
  quadrant: { id: 'observability', name: 'Security and Observability' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'elastic',
  id: 'elastic',
  title: 'Elastic (APM & DevOps)',
  quadrant: { id: 'observability', name: 'Security and Observability' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'splunk',
  id: 'splunk',
  title: 'Splunk (SOC & Compliance)',
  quadrant: { id: 'observability', name: 'Security and Observability' },
});
entries.push({
  moved: 0,
  ring: { id: 'target', name: 'TARGET', color: '#772299' },
  url: '#',
  key: 'cloudwatch',
  id: 'cloudwatch',
  title: 'CloudWatch ',
  quadrant: { id: 'observability', name: 'Security and Observability' },
});

export default function getSampleData(): Promise<TechRadarLoaderResponse> {
  return Promise.resolve({
    rings,
    quadrants,
    entries,
  });
}
