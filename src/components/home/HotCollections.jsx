import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../../css/styles/HotCollections.css";

const HotCollections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    axios
      .get("https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections")
      .then((res) => {
        setCollections(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 4, spacing: 15 },
    breakpoints: {
      "(max-width: 1200px)": { slides: { perView: 3, spacing: 10 } },
      "(max-width: 768px)": { slides: { perView: 2, spacing: 10 } },
      "(max-width: 480px)": { slides: { perView: 1, spacing: 10 } },
    },
  });

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="col-lg-12">
          <div className="text-center">
            <h2>Hot Collections</h2>
            <div className="small-border bg-color-2"></div>
          </div>
        </div>
        

        
        <div className="slider-wrapper">
          {collections.length === 0  ? (
            <div className="keen-slider">
              {[...Array(4)].map((_, index) => (
                <div className="keen-slider__slide" key={index}>
                  <div className="skeleton-slide">
                    <div className="skeleton-avatar"></div>
                    <div className="skeleton-title"></div>
                    <div className="skeleton-code"></div>
                    </div>
                </div>
              ))}
            </div>
          ) : (
            <>
          <div ref={sliderRef} className="keen-slider">
            {collections.map((item) => (
              <div className="keen-slider__slide" key={item.id}>
                <div className="nft_coll">
                  <div className="nft_wrap">
                    <Link to={`/item-details/${item.nftId}`}>
                      <img
                        src={item.nftImage}
                        className="nft-image"
                        alt={item.title}
                      />
                    </Link>

                    <div className="avatar-overlay">
                      <Link to="/author">
                        <img
                          className="author-image"
                          src={item.authorImage}
                          alt={item.title}
                        />
                      </Link>
                      <i className="fa fa-check custom-check"></i>
                    </div>
                  </div>

                  <div className="nft_coll_info">
                    <Link to="/explore">
                      <h4>{item.title}</h4>
                    </Link>
                    <span>ERC-{item.code}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          <button
            onClick={() => slider.current?.prev()}
            className="arrow prev-arrow"
          >
            &#10094;
          </button>

          <button
            onClick={() => slider.current?.next()}
            className="arrow next-arrow"
          >
            &#10095;
          </button>
          </>
          )}  
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
