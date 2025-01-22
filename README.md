name: Run Mobile Tests

on:
  push:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: 16

    - name: Install dependencies
      run: npm install

    - name: Start Appium Server
      run: appium --log-level error &

    - name: Run Tests
      run: npx wdio run wdio.conf.js
