pipeline {
    agent any
    tools {nodejs "node"}
    stages {
	stage('Sonar Analysis') {
	steps {
          sh "npm install"
				  sh "ls"
          sh "npm run coverage"
            }
          }
        }
    }
