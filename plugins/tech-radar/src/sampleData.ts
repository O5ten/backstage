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
quadrants.push({ id: 'datastore', name: 'Datastores' });
quadrants.push({ id: 'cicd', name: 'CI/CD and Infrastructure' });
quadrants.push({ id: 'observability', name: 'Security and Observability' });

const entries = new Array<RadarEntry>();
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'javascript',
  id: 'javascript',
  title: 'JavaScript',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'java',
  id: 'java',
  title: 'Java (OpenJDK)',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'dotnet',
  id: 'dotnet',
  title: 'C# .NET',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'python',
  id: 'python',
  title: 'Python3',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'vue',
  id: 'vue',
  title: 'Vue',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'springboot',
  id: 'springboot',
  title: 'Spring Boot',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'kotlin',
  id: 'kotlin',
  title: 'Kotlin (app)',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'contentful',
  id: 'contentful',
  title: 'Contentful CMS',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'dotnet',
  id: 'dotnet',
  title: 'dotnet core',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'apigee',
  id: 'apigee',
  title: 'Apigee',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'rabbitmq',
  id: 'rabbitmq',
  title: 'RabbitMQ',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'pilot',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'graphql',
  id: 'graphql',
  title: 'GraphQL',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'pilot',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'epicms',
  id: 'epicms',
  title: 'Epi CMS decoupled',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'pilot',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'django',
  id: 'django',
  title: 'Django',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'pilot',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'aws-sns-sqs',
  id: 'aws-sns-sqs',
  title: 'AWS SNS/SQS',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'dotnet-framework',
  id: 'dotnet-framework',
  title: '.NET Framework',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'jsp-struts',
  id: 'jsp-struts',
  title: 'JSP/Struts',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'jquery',
  id: 'jquery',
  title: 'JQuery',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'powerbuilder',
  id: 'powerbuilder',
  title: 'Powerbuilder',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'angularjs',
  id: 'angularjs',
  title: 'Angular JS',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'tridion',
  id: 'tridion',
  title: 'Tridion CMS',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'vbnet',
  id: 'vbnet',
  title: 'VB.NET',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'tibco',
  id: 'tibco',
  title: 'Tibco',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'webmethods',
  id: 'webmethods',
  title: 'Webmethods',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'proiv',
  id: 'proiv',
  title: 'ProIV',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'ccpp',
  id: 'ccpp',
  title: 'C/C++',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'java-oracle',
  id: 'java-oracle',
  title: 'Java (OracleJDK)',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'custom-scripts',
  id: 'custom-scripts',
  title: 'Custom Scripts',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'proprietary-languages',
  id: 'proprietary-languages',
  title: 'Proprietary Languages',
  quadrant: 'languages',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'postgres',
  id: 'postgres',
  title: 'Postgres (AWS RDS)',
  quadrant: 'datastore',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'oracle',
  id: 'oracle',
  title: 'Oracle (on-prem)',
  quadrant: 'datastore',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'pilot',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'dynamodb',
  id: 'dynamodb',
  title: 'DynamoDB (AWS)',
  quadrant: 'datastore',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'sqlserver',
  id: 'sqlserver',
  title: 'SQLServer',
  quadrant: 'datastore',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'mysql',
  id: 'mysql',
  title: 'MySQL',
  quadrant: 'datastore',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'mongodb',
  id: 'mongodb',
  title: 'MongoDB',
  quadrant: 'datastore',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'jenkins',
  id: 'jenkins',
  title: 'Jenkins',
  quadrant: 'cicd',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'github',
  id: 'github',
  title: 'GitHub Enterprise',
  quadrant: 'cicd',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'nexus',
  id: 'nexus',
  title: 'SonaType Nexus',
  quadrant: 'cicd',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'sonarqube',
  id: 'sonarqube',
  title: 'SonarQube',
  quadrant: 'cicd',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'desktop',
  id: 'desktop',
  title: 'Desktop Builds',
  quadrant: 'cicd',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'desktop-jenkins',
  id: 'desktop-jenkins',
  title: 'Desktop Jenkins',
  quadrant: 'cicd',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'teamcity',
  id: 'teamcity',
  title: 'TeamCity',
  quadrant: 'cicd',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'others',
  id: 'others',
  title: 'Others',
  quadrant: 'cicd',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'pilot',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'serverless',
  id: 'serverless',
  title: 'Serverless',
  quadrant: 'cicd',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'paas',
  id: 'paas',
  title: 'Containers on PaaS',
  quadrant: 'cicd',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'ec2',
  id: 'ec2',
  title: 'EC2 on AWS',
  quadrant: 'cicd',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'on-prem-vm-ware',
  id: 'on-prem-vm-ware',
  title: 'On-premise VMware',
  quadrant: 'cicd',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'on-prem-vm-ware',
  id: 'on-prem-vm-ware',
  title: 'On-premise VMware',
  quadrant: 'cicd',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'ansible',
  id: 'ansible',
  title: 'Ansible',
  quadrant: 'cicd',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'cloudformation',
  id: 'cloudformation',
  title: 'CloudFormation',
  quadrant: 'cicd',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'custom-logging',
  id: 'custom-logging',
  title: 'Custom Logging',
  quadrant: 'observability',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'appdynamics',
  id: 'appdynamics',
  title: 'AppDynamics APM',
  quadrant: 'observability',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'secrets-in-deployments',
  id: 'secrets-in-deployments',
  title: 'Secrets in deployment files',
  quadrant: 'observability',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'exit',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'poor-visibility-of-security-issues',
  id: 'poor-visibility-of-security-issues',
  title: 'Poor Visibility of Security Issues',
  quadrant: 'observability',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'kubernetes-secrets',
  id: 'kubernetes-secrets',
  title: 'Kubernetes Secrets',
  quadrant: 'observability',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'sonarqube',
  id: 'sonarqube',
  title: 'SonarQube',
  quadrant: 'observability',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'owasp-zap',
  id: 'owasp-zap',
  title: 'OWASP Zap',
  quadrant: 'observability',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'defect-dojo',
  id: 'defect-dojo',
  title: 'Defect Dojo',
  quadrant: 'observability',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'pilot',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'vault',
  id: 'vault',
  title: 'HashiCorp Vault',
  quadrant: 'observability',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'pilot',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'conjur',
  id: 'conjur',
  title: 'Cyberark Conjur',
  quadrant: 'observability',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'elastic',
  id: 'elastic',
  title: 'Elastic (APM & DevOps)',
  quadrant: 'observability',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'splunk',
  id: 'splunk',
  title: 'Splunk (SOC & Compliance)',
  quadrant: 'observability',
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: 'target',
      date: new Date('2020-11-18'),
    },
  ],
  url: '#',
  key: 'cloudwatch',
  id: 'cloudwatch',
  title: 'CloudWatch ',
  quadrant: 'observability',
});

export default function getSampleData(): Promise<TechRadarLoaderResponse> {
  return Promise.resolve({
    rings,
    quadrants,
    entries,
  });
}
