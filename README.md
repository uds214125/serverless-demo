# serverless-demo
aws serverless demo 


## To run service
    - npm i -g serverless 
    - npm i (within root folder)
    - npm run-script sls

### Invoke api :  http://localhost:3000/dev/parse

### output 
{
    "message": "OK",
    "output": [
        {
            "title": "Unlocked Original Compatible with iPhone 5S Aple Phone 5S 16GB Black Model A1457",
            "description": "undefined5S 16GB Black model A1457Released 2013, September 20112g, 7.6mm thicknessiOES 7, up to iOES2.4.6Dimensions:123.8 x 58.6 x 7.6 mm (4.87 x 2.31 x 0.30 in)DISPLAY SIZE:4.0 inches, 44.1 cm2 (~60.8% screen-to-body ratio)MEMORY:Internal 16GB 1GB RAM",
            "images": [
                "https://images-na.ssl-images-amazon.com/images/I/914s%2B6Y8j4L.__AC_SY300_SX300_QL70_ML2_.jpg"
            ]
        }
    ]
}

## To run the test

`npm test`


## To deploy 

    - change role<arn> and region in serverless.yml file 
    - sls deploy -v

