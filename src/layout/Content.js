import React, { useEffect, useState } from "react";
import Divider from "../components/Divider";
import TweetBox from "../components/TweetBox";
import { PopulerIcon } from "../icons/Icon";
import FeedList from "../components/FeedList";
import db from "../firebase";

const Content = () => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    db.collection("feed")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setTweets(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  console.log(tweets);

  return (
    <main className=" flex-1 flex flex-col border-r border-l border-gray-extralight">
      <header className="sticky z-10 top-0 flex justify-between items-center p-4 border-b border-gray-extralight bg-white">
        <span className="text-xl font-bold text-gray-900">Home</span>
        <PopulerIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className="flex px-4 py-3 space-x-2">
        <img
          src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
          alt="Profile"
          className="w-11 h-11 rounded-full"
        />

        <TweetBox />
      </div>
      <Divider />
      <FeedList tweets={tweets} />
    </main>
  );
};

export default Content;
