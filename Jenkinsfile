pipeline {
    agent { label 'node22' }

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

        stage('Show build environment') {
            steps {
                sh '''
                    echo "Branch: ${BRANCH_NAME:-unknown}"
                    echo "Commit: $(git rev-parse --short HEAD)"
                    echo "Node: $(node --version)"
                    echo "npm: $(npm --version)"
                    echo "Git: $(git --version)"
                '''
            }
        }

stage('Install dependencies') {
    steps {
        retry(2) {
            sh '''
                npm ci \
                  --maxsockets=1 \
                  --fetch-retries=5 \
                  --fetch-retry-mintimeout=1000 \
                  --fetch-retry-maxtimeout=10000
            '''
        }
    }
}

        stage('Build application') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        always {
            deleteDir()
        }
    }
}