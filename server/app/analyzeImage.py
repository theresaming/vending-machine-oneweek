########### Python 3.6 #############
import http.client, urllib.request, urllib.parse, urllib.error, base64, json

###############################################
#### Update or verify the following values. ###
###############################################

def magic(path):
    # Replace the subscription_key string value with your valid subscription key.
    subscription_key = '9de35559b18e42a089a40ecd7abdc26f'

    # Replace or verify the region.
    #
    # You must use the same region in your REST API call as you used to obtain your subscription keys.
    # For example, if you obtained your subscription keys from the westus region, replace
    # "westcentralus" in the URI below with "westus".
    #
    # NOTE: Free trial subscription keys are generated in the westcentralus region, so if you are using
    # a free trial subscription key, you should not need to change this region.
    uri_base = 'westcentralus.api.cognitive.microsoft.com'

    # Load raw image file into memory
    pathToFileInDisk = path
    with open( pathToFileInDisk, 'rb' ) as f:
        data = f.read()

    headers = {
        # Request headers.
        'Content-Type': 'application/octet-stream',
        # 'Content-Type': 'application/json; charset=UTF-8',
        'Ocp-Apim-Subscription-Key': subscription_key,
        'Access-Control-Allow-Origin': '*',
    }

    params = urllib.parse.urlencode({
        # Request parameters. All of them are optional.
        'visualFeatures': 'Categories,Description,Color',
        'language': 'en',
    })

    try:
        # Execute the REST API call and get the response.
        conn = http.client.HTTPSConnection('westcentralus.api.cognitive.microsoft.com')
        conn.request("POST", "/vision/v1.0/analyze?%s" % params, data, headers)
        response = conn.getresponse()
        data = response.read()
        # 'data' contains the JSON data. The following formats the JSON data for display.
        parsed = json.loads(data)
        caption = parsed["description"]["captions"][0]["text"]
        # print(caption)
        # print ("Response:")
        # print (json.dumps(parsed, sort_keys=True, indent=2))
        conn.close()
        return caption

    except Exception as e:
        print('Error:')
        print(e)

    ####################################
