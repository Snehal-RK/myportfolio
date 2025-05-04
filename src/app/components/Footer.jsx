"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, Users } from 'lucide-react'; // Import icons

const Footer = () => {
  const [viewCount, setViewCount] = useState(0);
  const [visitorCount, setVisitorCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        // **Important:** Replace these URLs with your actual backend endpoints
        const viewCountResponse = await fetch('/.netlify/functions/views'); //  Endpoint to get view count
        if (!viewCountResponse.ok) {  // **Check for a successful response**
          throw new Error(`Failed to fetch views: ${viewCountResponse.status}`);
        }
        const viewCountData = await viewCountResponse.json();
        setViewCount(viewCountData.count);

        const visitorCountResponse = await fetch('/.netlify/functions/visitors'); // Endpoint to get visitor count
         if (!visitorCountResponse.ok) { // **Check for a successful response**
            throw new Error(`Failed to fetch visitors: ${visitorCountResponse.status}`);
         }
        const visitorCountData = await visitorCountResponse.json();
        setVisitorCount(visitorCountData.count);

      } catch (error) {
        console.error("Failed to fetch live counts:", error);
        // Handle error:  Show 0, an error message, or retry.  Crucial for UX.
        setViewCount(0);
        setVisitorCount(0);
      } finally {
        setLoading(false);
      }
    };

    fetchCounts(); // Initial fetch

    const intervalId = setInterval(fetchCounts, 5000); // Poll every 5 seconds (adjust as needed)

    return () => clearInterval(intervalId); // Cleanup on unmount:  Stop the polling
  }, []);

  // Animation variants
  const countVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <footer className='footer w-full border border-t-[#33353f] border-l-transparent border-r-transparent mx-auto items-center px-4 text-white'>
      <div className='container p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4'>
        <span className='text-lg font-[open sans] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-400'>SNEHAL RAJENDRA</span>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Eye className="w-4 h-4" />
            <span>Views: </span>
            {loading ? (
              <span className="animate-pulse">Loading...</span>
            ) : (
              <motion.span
                variants={countVariants}
                initial="hidden"
                animate="visible"
                className="font-medium"
              >
                {viewCount.toLocaleString()}
              </motion.span>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Users className="w-4 h-4" />
            <span>Visitors: </span>
             {loading ? (
              <span className="animate-pulse">Loading...</span>
            ) : (
              <motion.span
                variants={countVariants}
                initial="hidden"
                animate="visible"
                className="font-medium"
              >
                {visitorCount.toLocaleString()}
              </motion.span>
            )}
          </div>
        </div>
        <p className='text-xs text-slate-600'> All rights reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;

