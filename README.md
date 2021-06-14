# Example usage of the de-test testing library

## See it live

1. `git clone https://github.com/MikeyZat/detest-example.git`
2. `npm i`
3. `npm start`
4. `npm run detest`
5. `npm run another-detest`

Check out [detest.yaml config file](./detest.yaml) for a deeper understanding :)


## If you don't want to clone the repo, here is what you will see
### npm start

You should see the running React application on http://localhost:3000
It currently has 3 subpages, which all will be covered with design tests.

![Screenshot from 2021-06-14 09-39-04](https://user-images.githubusercontent.com/41756225/121861047-c214d400-ccf9-11eb-9c33-9faed7dc4cd5.png)

### npm run detest
You should see the desing testing evaluation in your terminal. Hopefully, all of them will pass :)

![Screenshot from 2021-06-14 10-17-57](https://user-images.githubusercontent.com/41756225/121861115-d6f16780-ccf9-11eb-9606-d261220c89ea.png)


### npm run another-detest
Here you can see running the `detest` with a different configuration file. This test case suite should **fail** so you can see what it looks like.

![Screenshot from 2021-06-14 10-19-20](https://user-images.githubusercontent.com/41756225/121861390-1029d780-ccfa-11eb-97b1-06bbae660c7a.png)


## Introducing detest to CI pipeline

This repo is a great example how to integrate the design testing to your CI pipeline with `detest`.

> What do we want to achieve? What do we need to do?

We would like to run detest tests with our main configuration file on our running application. Then, we would like our build to fail if the tests failed, and succeed if they passed. Here is how you can achieve that.

### Using concurrently and wait-on to start our application and tests

I highly recommend using [concurrently](https://www.npmjs.com/package/concurrently) and [wait-on](https://www.npmjs.com/package/wait-on) packages to start your application and tests. Here is what you can add to your `package.json` file:

```json
"scripts": {
  "prod-test": "concurrently -s=first -k 'npm start' 'wait-on http://localhost:3000/ && npm run detest'"
}
```
Firstly, it starts your React application with `npm start` and then as soon as it's up on `http://localhost:3000/` it runs design tests with `npm run detest`.

The `-s=first -k` options makes the whole command exit (with proper _exit code_) as soon as the detest tests are finished - this will be helpful in our CI 
pipeline.

Here I use the default `detest.yaml` configuration file but you can use whatever file/options you want.

### Creating the CI pipeline and including the design tests


## de-test library

Check out the documentation and the library page -> [de-test](https://github.com/MikeyZat/detest).
