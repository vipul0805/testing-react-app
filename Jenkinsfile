pipeline {
    agent any
    stages {
	stage('Sonar Analysis') {
	steps {
          sh "npm install"
				  sh "ls"
          sh "sudo npm run test -- --coverage"
            }
          }
        }
    }
