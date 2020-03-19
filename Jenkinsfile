pipeline {
    agent any
    stages {
	stage('Sonar Analysis') {
	steps {
          sh "npm install"
				  sh "ls"
          sh "set CI=true  && npm run coverage:prod -u"
            }
          }
        }
    }
