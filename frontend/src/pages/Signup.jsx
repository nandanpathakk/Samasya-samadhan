import React, { useState } from 'react';
export default function SignUp(){

    async function signUpNewUser() {
        const { data, error } = await supabase.auth.signUp({
          email: 'example@email.com',
          password: 'example-password',
          options: {
            emailRedirectTo: 'https://example.com/welcome',
          },
        })
      }     
    return <div>
        <section class="flex flex-col md:flex-row h-screen items-center">
        <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div class="w-full h-100">
                <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Sign Up to your account</h1>
            <form class="mt-6" action="#" method="POST">
            <div>
                <label class="block text-gray-700">Email Address</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required></input>
            </div>
            <div class="mt-4">
                <label class="block text-gray-700">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required></input>
            </div>
            <div class="text-right mt-2">
             </div>
            <button type="submit" onClick={signUpNewUser} class="w-full block bg-gray-800 hover:bg-grey-400 focus:bg-grey-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Sign Up</button>
            </form>
            <p class="mt-8">Already have an account? <a href="#" class="text-blue-500 hover:text-blue-700 font-semibold">Log In</a></p>
            <br></br><p><a href="#" class="text-blue-500 hover:text-blue-700 font-semibold">Admin</a></p>
        </div>
        </div>
        </section>
    </div>
    }

// import { useState, useEffect } from 'react'
// import { createClient } from '@supabase/supabase-js'
// import { Auth } from '@supabase/auth-ui-react'
// import { ThemeSupa } from '@supabase/auth-ui-shared'

// const supabase = createClient('https://izqxqhakqkbmdstesxnd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6cXhxaGFrcWtibWRzdGVzeG5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwNTE4NzMsImV4cCI6MjAyNDYyNzg3M30.hsV7zVMAymD7ZgwUffJodsOYT4T4Zr5j-bAv37ZDQqI')

// export default function App() {
//   const [session, setSession] = useState(null)

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session)
//     })

//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session)
//     })

//     return () => subscription.unsubscribe()
//   }, [])

//   if (!session) {
//     return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
//   }
//   else {
//     return (<div>Logged in!</div>)
//   }
// }
