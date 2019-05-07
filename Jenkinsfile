pipeline {
  agent {
    dockerfile {
      filename 'dockerfile'
    }

  }
  stages {
    stage('Stage') {
      steps {
        echo 'In Progress'
      }
    }
  }
  environment {
    ENV = 'prod'
  }
}