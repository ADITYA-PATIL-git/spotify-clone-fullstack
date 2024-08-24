/** @type {import('next').NextConfig} */
const nextConfig = {
    // images:{
    //     domains:[
    //         "bfqbyedxdahdipkaiyfh.supabase.co"
    //     ]

    // }
    images: {
        remotePatterns: [
          {
            
            hostname: "bfqbyedxdahdipkaiyfh.supabase.co",
            
          },
        ],
      },
};

export default nextConfig;
