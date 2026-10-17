pipeline {
    agent any

    options {
        timestamps()
        skipDefaultCheckout(true)
    }

    stages {
        stage('Checkout source') {
            steps {
                checkout scm
            }
        }

        stage('Identify build') {
            steps {
                sh '''
                    echo "Branch: ${BRANCH_NAME:-unknown}"
                    echo "Commit:"
                    git rev-parse --short HEAD
                    echo "Top-level project files:"
                    ls -la
                '''
            }
        }
    }
}