import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import connectToDB from "../../../global/connect" //connect to the mongodb database

//import models
import User from "../../../models/user"


connectToDB()

export default NextAuth({
  
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
    callbacks: {
      
      async error(message) {
        console.log(message);
        
      },
      async signIn(req, userAcc, profile) {
        
        const email = profile.email;
        const user = await User.find({email: email}) //find user in the users collection
        
        if(user.length!==0){ //if user exists
            return;
        }
        else{
            const id = Math.random().toString(36).slice(2);

            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            const profileColor = color;

            const newUser = new User({
                name: req.name,
                username:profile.given_name+'-'+id,
                email:req.email,
                image: req.image,
                banner:profileColor,
                bio:`Hi, I'm ${req.name}!`,
            }) //save the new user in the users collection
            newUser.save()
        }
      }
  },
  pages: {
    signIn: '/login',
  }

});