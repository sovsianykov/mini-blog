const app = require("express")()
const admin = require("firebase-admin");

const serviceAccount = require("./mini-blog-d8148-firebase-adminsdk-o1p7g-3e255f7b5f.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)

});

app.get( '/setAdmin', async ( req,res) => {
    admin.auth().setCustomUserClaims('knwSKdpjl5NvFBD2ZvfyqqNhBCb2', {
            type : 'administrator'
        }).then(()=>console.log('done'))
} )

app.listen(4000,()=>console.log('we are listening port 4000'))
