// import React from "react";
// import AuthorBanner from "../images/author_banner.jpg";
// import AuthorItems from "../components/author/AuthorItems";
// import { Link } from "react-router-dom";
// import AuthorImage from "../images/author_thumbnail.jpg";
// import axios from "axios";

// const Author = () => {
//   return (
//     <div id="wrapper">
//       <div className="no-bottom no-top" id="content">
//         <div id="top"></div>

//         <section
//           id="profile_banner"
//           aria-label="section"
//           className="text-light"
//           data-bgimage="url(images/author_banner.jpg) top"
//           style={{ background: `url(${AuthorBanner}) top` }}
//         ></section>

//         <section aria-label="section">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12">
//                 <div className="d_profile de-flex">
//                   <div className="de-flex-col">
//                     <div className="profile_avatar">
//                       <img src={AuthorImage} alt="" />

//                       <i className="fa fa-check"></i>
//                       <div className="profile_name">
//                         <h4>
//                           Monica Lucas
//                           <span className="profile_username">@monicaaaa</span>
//                           <span id="wallet" className="profile_wallet">
//                             UDHUHWudhwd78wdt7edb32uidbwyuidhg7wUHIFUHWewiqdj87dy7
//                           </span>
//                           <button id="btn_copy" title="Copy Text">
//                             Copy
//                           </button>
//                         </h4>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="profile_follow de-flex">
//                     <div className="de-flex-col">
//                       <div className="profile_follower">573 followers</div>
//                       <Link to="#" className="btn-main">
//                         Follow
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-md-12">
//                 <div className="de_tab tab_simple">
//                   <AuthorItems />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Author;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const Author = () => {
//   const { id } = useParams();
//   const [author, setAuthor] = useState(null);

//   useEffect(() => {
//     const fetchAuthor = async () => {
//       try {
//         const response = await axios.get(
//           `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`
//         );
//         setAuthor(response.data);
//       } catch (error) {
//         console.error("Error fetching author:", error);
//       }
//     };

//     fetchAuthor();
//   }, [id]);

//   if (!author) return <p>Loading...</p>;

//   return (
//     <div>
//       <h1>{author.authorName}</h1>
//       <img
//         src={author.authorImage}
//         alt={author.authorName}
//         width={150}
//       />
//       <p>Followers: {author.followers}</p>

//       <h2>NFT Collection</h2>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//         {author.nftCollection.map((nft) => (
//           <div key={nft.nftId}>
//             <img src={nft.nftImage} alt={nft.title} width={150} />
//             <p>{nft.title}</p>
//             <p>{nft.price} ETH</p>
//             <p>{nft.likes} likes</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Author;

// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import AuthorBanner from "../images/author_banner.jpg";

// const Author = () => {
//   const { id } = useParams();
//   const [author, setAuthor] = useState(null);

//   useEffect(() => {
//     const fetchAuthor = async () => {
//       try {
//         const response = await axios.get(
//           `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`,
//         );
//         setAuthor(response.data);
//       } catch (error) {
//         console.error("Error fetching author:", error);
//       }
//     };

//     fetchAuthor();
//   }, [id]);

//   if (!author) return <p>Loading...</p>;

//   return (
//     <div id="wrapper">
//       <div className="no-bottom no-top" id="content">
//         <div id="top"></div>

//         <section
//           id="profile_banner"
//           className="text-light"
//           style={{
//             background: `url(${AuthorBanner}) top`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             height: "300px",
//           }}
           
//         ></section>

//         <section>
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12">
//                 <div className="d_profile de-flex">
//                   <div className="de-flex-col">
//                     <div className="profile_avatar">
//                       <img src={author.authorImage} alt={author.authorName} />
//                       <i className="fa fa-check"></i>

//                       <div className="profile_name">
//                         <h4>
//                           {author.authorName}
//                           <span className="profile_username">
//                             @{author.tag}
//                           </span>
//                           <span className="profile_wallet">
//                             {author.address}
//                           </span>
//                         </h4>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="profile_follow de-flex">
//                     <div className="de-flex-col">
//                       <div className="profile_follower">
//                         {author.followers} followers
//                       </div>
//                       <button className="btn-main">Follow</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-12 mt-4">
//                 <div className="row">
//                   {author.nftCollection?.map((nft) => (
//                     <div
//                       className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
//                       key={nft.nftId}
//                     >
//                       <div className="nft__item">
//                         <div className="nft__item_wrap">
//                           <Link to={`/item-details/${nft.nftId}`}>
//                             <img
//                               src={nft.nftImage}
//                               className="img-fluid"
//                               alt={nft.title}
//                             />
//                           </Link>
//                         </div>

//                         <div className="nft__item_info">
//                           <Link to={`/item-details/${nft.nftId}`}>
//                             <h4>{nft.title}</h4>
//                           </Link>
//                           <div className="nft__item_price">{nft.price} ETH</div>
//                           <div className="nft__item_like">
//                             <i className="fa fa-heart"></i>
//                             <span>{nft.likes}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Author;

// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import AuthorBanner from "../images/author_banner.jpg";

// const Author = () => {
//   const { id } = useParams();
//   const [author, setAuthor] = useState(null);
//   const [followers, setFollowers] = useState(0);
//   const [isFollowing, setIsFollowing] = useState(false);

//   useEffect(() => {
//     const fetchAuthor = async () => {
//       try {
//         const response = await axios.get(
//           `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`
//         );
//         setAuthor(response.data);
//         setFollowers(response.data.followers); // initialize follower count
//       } catch (error) {
//         console.error("Error fetching author:", error);
//       }
//     };

//     fetchAuthor();
//   }, [id]);

//   const handleFollowToggle = () => {
//     if (isFollowing) {
//       setFollowers((prev) => prev - 1);
//     } else {
//       setFollowers((prev) => prev + 1);
//     }

//     setIsFollowing((prev) => !prev);
//   };

//   if (!author) return <p>Loading...</p>;

//   return (
//     <div id="wrapper">
//       <div className="no-bottom no-top" id="content">
//         <div id="top"></div>

//         <section
//           id="profile_banner"
//           className="text-light"
//           style={{
//             background: `url(${AuthorBanner}) top`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             height: "300px",
//           }}
//         ></section>

//         <section>
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12">
//                 <div className="d_profile de-flex">
//                   <div className="de-flex-col">
//                     <div className="profile_avatar">
//                       <img src={author.authorImage} alt={author.authorName} />
//                       <i className="fa fa-check"></i>

//                       <div className="profile_name">
//                         <h4>
//                           {author.authorName}
//                           <span className="profile_username">
//                             @{author.tag}
//                           </span>
//                           <span className="profile_wallet">
//                             {author.address}
//                           </span>
//                         </h4>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="profile_follow de-flex">
//                     <div className="de-flex-col">
//                       <div className="profile_follower">
//                         {followers} followers
//                       </div>

//                       <button
//                         className="btn-main"
//                         onClick={handleFollowToggle}
//                       >
//                         {isFollowing ? "Unfollow" : "Follow"}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-md-12 mt-4">
//                 <div className="row">
//                   {author.nftCollection?.map((nft) => (
//                     <div
//                       className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
//                       key={nft.nftId}
//                     >
//                       <div className="nft__item">
//                         <div className="nft__item_wrap">
//                           <Link to={`/item-details/${nft.nftId}`}>
//                             <img
//                               src={nft.nftImage}
//                               className="img-fluid"
//                               alt={nft.title}
//                             />
//                           </Link>
//                         </div>

//                         <div className="nft__item_info">
//                           <Link to={`/item-details/${nft.nftId}`}>
//                             <h4>{nft.title}</h4>
//                           </Link>
//                           <div className="nft__item_price">
//                             {nft.price} ETH
//                           </div>
//                           <div className="nft__item_like">
//                             <i className="fa fa-heart"></i>
//                             <span>{nft.likes}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Author;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import AuthorBanner from "../images/author_banner.jpg";

const Author = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState(null);
  const [followers, setFollowers] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await axios.get(
          `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`
        );
        setAuthor(response.data);
        setFollowers(response.data.followers);
      } catch (error) {
        console.error("Error fetching author:", error);
      }
    };

    fetchAuthor();
  }, [id]);

  const handleFollowToggle = () => {
    setFollowers(prev => isFollowing ? prev - 1 : prev + 1);
    setIsFollowing(prev => !prev);
  };

  if (!author) return <p>Loading...</p>;

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        {/* Banner */}
        <section
          id="profile_banner"
          className="text-light"
          style={{
            background: `url(${AuthorBanner}) top`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px",
          }}
        ></section>

        {/* Profile Info */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      <img src={author.authorImage} alt={author.authorName} />
                      <i className="fa fa-check"></i>

                      <div className="profile_name">
                        <h4>
                          {author.authorName}
                          <span className="profile_username">@{author.tag}</span>
                          <span className="profile_wallet">{author.address}</span>
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">{followers} followers</div>
                      <button className="btn-main" onClick={handleFollowToggle}>
                        {isFollowing ? "Unfollow" : "Follow"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* NFT Collection */}
              <div className="col-md-12 mt-4">
                <div className="row">
                  {author.nftCollection?.map((nft) => (
                    <div
                      className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                      key={nft.nftId}
                    >
                      <div className="nft__item" style={{ position: "relative" }}>
                        {/* NFT Image */}
                        <div className="nft__item_wrap">
                          <Link to={`/item-details/${nft.nftId}`}>
                            <img
                              src={nft.nftImage}
                              className="img-fluid"
                              alt={nft.title}
                            />
                          </Link>
                        </div>

                        {/* Author Avatar */}
                        <div
                          style={{
                            position: "absolute",
                            top: "15px",      // shifted down
                            left: "15px",     // shifted right
                            width: "40px",
                            height: "40px",
                          }}
                        >
                          <img
                            src={author.authorImage}
                            alt={author.authorName}
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                              objectFit: "cover",
                              border: "2px solid white",
                            }}
                          />
                          {/* Verified Check */}
                          <div
                            style={{
                              position: "absolute",
                              bottom: "0",       // half overlapping
                              right: "-2px",
                              width: "14px",
                              height: "14px",
                              backgroundColor: "#8364e2", // same as btn-main
                              color: "white",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "4px",
                              fontWeight: "bold",
                            }}
                          >
                            <i className="fa fa-check" style={{ fontSize: "10px" }}></i>
                          </div>
                        </div>

                        {/* NFT Info */}
                        <div className="nft__item_info mt-2">
                          <Link to={`/item-details/${nft.nftId}`}>
                            <h4>{nft.title}</h4>
                          </Link>
                          <div className="nft__item_price">{nft.price} ETH</div>
                          <div className="nft__item_like">
                            <i className="fa fa-heart"></i>
                            <span>{nft.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
