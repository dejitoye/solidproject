import useScreenSize from "hooks/useScreenSize";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Messages() {
  const state = useSelector((state) => state.friend.friendlist);
  const [loading, setloading] = useState(false);
  const screenSize = useScreenSize();

 
      return (
        <div className="">
          <div className="p-3">
           
          </div>
          <div className="p-3"> hdfhdhfhd hdhfhdfhhdfdh</div>
          <div> hdfhdhfhd hdhfhdfhhdfdh</div>
          <div>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            magni ex perferendis asperiores quaerat ut deserunt vel. Veritatis
            dignissimos deserunt, at nisi optio quisquam, ab minus praesentium,
            eaque magni nostrum!
          </div>
          <div>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            magni ex perferendis asperiores quaerat ut deserunt vel. Veritatis
            dignissimos deserunt, at nisi optio quisquam, ab minus praesentium,
            eaque magni nostrum!
          </div>
          <div> hdfhdhfhd hdhfhdfhhdfdh</div>
          <div> hdfhdhfhd hdhfhdfhhdfdh</div>
          <div>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            magni ex perferendis asperiores quaerat ut deserunt vel. Veritatis
            dignissimos deserunt, at nisi optio quisquam, ab minus praesentium,
            eaque magni nostrum!
          </div>
          <div>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            magni ex perferendis asperiores quaerat ut deserunt vel. Veritatis
            dignissimos deserunt, at nisi optio quisquam, ab minus praesentium,
            eaque magni nostrum!
          </div>
          <div> hdfhdhfhd hdhfhdfhhdfdh</div>
          <div> hdfhdhfhd hdhfhdfhhdfdh</div>
          <div>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            magni ex perferendis asperiores quaerat ut deserunt vel. Veritatis
            dignissimos deserunt, at nisi optio quisquam, ab minus praesentium,
            eaque magni nostrum!
          </div>
          <div>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            magni ex perferendis asperiores quaerat ut deserunt vel. Veritatis
            dignissimos deserunt, at nisi optio quisquam, ab minus praesentium,
            eaque magni nostrum!
          </div>
          <div> hdfhdhfhd hdhfhdfhhdfdh</div>
          <div> hdfhdhfhd hdhfhdfhhdfdh</div>
          <div>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            magni ex perferendis asperiores quaerat ut deserunt vel. Veritatis
            dignissimos deserunt, at nisi optio quisquam, ab minus praesentium,
            eaque magni nostrum!
          </div>
          <div>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            magni ex perferendis asperiores quaerat ut deserunt vel. Veritatis
            dignissimos deserunt, at nisi optio quisquam, ab minus praesentium,
            eaque magni nostrum!
          </div>
          <div> hdfhdhfhd hdhfhdfhhdfdh</div>
          <div> hdfhdhfhd hdhfhdfhhdfdh</div>
          <div>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            magni ex perferendis asperiores quaerat ut deserunt vel. Veritatis
            dignissimos deserunt, at nisi optio quisquam, ab minus praesentium,
            eaque magni nostrum!
          </div>
          <div>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            magni ex perferendis asperiores quaerat ut deserunt vel. Veritatis
            dignissimos deserunt, at nisi optio quisquam, ab minus praesentium,
            eaque magni nostrum!
          </div>
          <div className="fixed bottom-0 w-3/5 bg-gray-100 flex p-5">
            <input type="text" className="w-full " />
            <button className=" px-2 border-2 bg-green-300"> send</button>
          </div>
        </div>
      );
  };



export default Messages;
