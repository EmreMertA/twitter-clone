import React from "react";
import { LikeIcon, ReplyIcon, ReTweetIcon, ShareIcon } from "../icons/Icon";

const FeedItem = ({ avatar, content, displayName, username, timestamp }) => {
  return (
    <article className="flex space-x-3 border-b border-gray-extralight px-4  py-3 cursor-pointer">
      <img src={avatar} alt="profile" className="w-11 h-11 rounded-full" />
      <div className="flex-1">
        <div className="flex items-center text-sm">
          <h4 className="font-bold ">{displayName}</h4>
          <span className="ml-2 text-gray-dark">{username}</span>
          <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full" />
          <span>{timestamp?.toDate().toLocaleTimeString("tr-TR")}</span>
        </div>
        <p className="mt-2 text-gray-900 text-sm">{content}</p>
        <ul className="flex justify-between max-w-md mt-3 -ml-1">
          <li className="flex items-center  space-x-3 text-gray-dark text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
              <ReplyIcon className="w-5 h-5 group-hover:text-primary-base" />
            </div>
            <span className="group-hover:text-primary-base">13</span>
          </li>
          <li className="flex items-center  space-x-3 text-gray-dark text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-200">
              <ReTweetIcon className="w-5 h-5 group-hover:bg-green-400" />
            </div>
            <span className="group-hover:text-primary-base">13</span>
          </li>
          <li className="flex items-center  space-x-3 text-gray-dark text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-pink-200">
              <LikeIcon className="w-5 h-5 group-hover:text-pink-400" />
            </div>
            <span className="group-hover:text-primary-base">13</span>
          </li>
          <li className="flex items-center  space-x-3 text-gray-dark text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
              <ShareIcon className="w-5 h-5 group-hover:text-primary-base" />
            </div>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default FeedItem;
