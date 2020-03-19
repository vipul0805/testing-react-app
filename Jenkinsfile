pipeline {
    agent any
    stages {
	stage('Sonar Analysis') {
	steps {
          sh "npm install"
				  sh "ls"
          sh "CI=true && sudo -n exact npm run coverage:prod -u"
            }
          }
        }
    }
