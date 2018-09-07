# Travis initial deployment procedure
- Encrypt private key for connecting to deployment server
  - Run `travis encrypt-file /Users/sysuser/.ssh/<private_key> --add`
- Commit changes to `.travis.yml` added by `travis encrypt-file`
- Add known host, decrypt and deploy steps in `.travis.yml`:
- Notice: we do extract the deploy_rsa in Travis /tmp folder to avoid deploying the decrypted key by any mean.
- I mainly use before_deploy to setup the SSH agent for two reasons:
- it happens after the script stage: we then avoid any possibility for third party scripts to leak active keys (npm worm, remember?);
- the build will fail if the deploy setup is incorrect.
```yml
if: branch = master
language: bash

addons:
	ssh_known_hosts: <deploy-host>

before_deploy:
- openssl aes-256-cbc -K $encrypted_<...>_key -iv $encrypted_<...>_iv -in id_rsa_travis.enc -out /tmp/id_rsa_travis -d
- eval "$(ssh-agent -s)"
- chmod 600 /tmp/id_rsa_travis
- ssh-add /tmp/id_rsa_travis

deploy:
  provider: script
  skip_cleanup: true
  script: rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/<dir> <ssh-user>@<deploy-host>:path/to/files
  on:
    branch: master
```