import { useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
import ReactStars from "react-stars";
import TextField from "@mui/material/TextField";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

import { COLORS } from "../utils/colors";
import profile from "../images/ellie-horn.webp";
import gumroad from "../images/gumroad-text-black.png";
import { mockData } from "../mockData";
import { getReviews } from "../api/reviews";
import ScrollToTop from "../components/ScrollToTop";

function Product() {
  const [reviews, setReviews] = useState({
    star1count: 0,
    star2count: 0,
    star3count: 0,
    star4count: 0,
    star5count: 0,
    totalStars: 0,
    countStars: 0,
    reviews: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReviews({ productId: mockData._id });

        if (data.data) {
          processReviews(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const processReviews = (reviews) => {
    let stars = {
      total: 0,
      count: 0,
      star1count: 0,
      star2count: 0,
      star3count: 0,
      star4count: 0,
      star5count: 0,
    };
    let reviewsObj = {
      reviews: [],
      count: 0,
    };

    reviews.forEach((review) => {
      Math.floor(review.stars) === 1 && (stars.star1count += 1);
      Math.floor(review.stars) === 2 && (stars.star2count += 1);
      Math.floor(review.stars) === 3 && (stars.star3count += 1);
      Math.floor(review.stars) === 4 && (stars.star4count += 1);
      Math.floor(review.stars) === 5 && (stars.star5count += 1);
      stars.total += review.stars;
      stars.count += 1;
      review.comment && reviewsObj.reviews.push(review);
    });

    setReviews({
      totalStars: stars.total,
      countStars: stars.count,
      reviews: reviewsObj.reviews,
      star1count: stars.star1count,
      star2count: stars.star2count,
      star3count: stars.star3count,
      star4count: stars.star4count,
      star5count: stars.star5count,
    });
  };

  return (
    <div className="App">
      <ScrollToTop />
      <header>
        <div className="description">
          <img className="profile-pic" src={profile} />
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            {mockData.author}
          </p>
        </div>
        <div className="header-actions">
          <TextField
            fullWidth
            name="comment"
            id="comment"
            className="comment"
            placeholder="Your email address"
            inputProps={{ maxLength: 141 }}
            sx={{
              "& .MuiInputBase-input": {
                fontFamily: "MabryPro",
                color: COLORS.black,
              },
              "& fieldset": {
                borderRadius: "0.25rem",
                border: `1px solid ${COLORS.black}`,
                transition: ".2s ease-in-out all",
              },
              ".MuiFormHelperText-root.Mui-error": {
                fontFamily: "MabryPro",
                paddingBottom: "10px",
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: COLORS.pink,
                },
            }}
          />
          <div className="button">Subscribe</div>
        </div>
      </header>
      <div className="main">
        <img
          className="product-image"
          src={"https://public-files.gumroad.com/nu8e8xocjj4gmzd365usgiw8d8pr"}
        />
        <div className="content-grid">
          <div className="column">
            <div className="grid-block">
              <h1>{mockData.title}</h1>
            </div>
            <div className="details">
              <div className="grid-block">29$</div>
              <div className="grid-block">{mockData.author}</div>
              <div className="grid-block">
                <ReactStars
                  count={5}
                  value={reviews.totalStars / reviews.countStars}
                  size={24}
                  color2={"#000000"}
                  edit={false}
                />
                {reviews.countStars > 1 || reviews.countStars === 0
                  ? reviews.countStars + " ratings"
                  : reviews.countStars + " rating"}
              </div>
              <div className="grid-block">
                {reviews.reviews.length > 1 || reviews.reviews.length === 0
                  ? reviews.reviews.length + " reviews"
                  : reviews.reviews.length + " review"}
              </div>
            </div>
            <div className="grid-block">
              <p>
                Designed for stand-up comedians who have been gigging regularly
                for at least a year, this is an intensive three-hour workshop
                that will equip you with a full toolkit for MCing stand-up
                comedy gigs, looking specifically at how being a great MC can
                often differ from being a great act.
              </p>
            </div>
            <div className="grid-block">
              <p>
                The workshop will be online on Sunday 18th February 2024 at 10am
                GMT. London: 10am | Paris: 11am | Singapore: 6pm | Sydney: 9pm
                Price: £29
              </p>
            </div>
          </div>
          <div className="column" id="font-14px">
            <div
              style={{
                display: "flex",
                padding: "1.5rem",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div className="button" id="buy">
                Add to cart
              </div>
              <p
                style={{
                  textDecoration: "underline",
                  textAlign: "center",
                  gap: "1.5rem",
                }}
              >
                100$ money back guarantee.
              </p>
              <div
                style={{
                  flexDirection: "column",
                  borderRadius: "0.25rem",
                  border: `1px solid ${COLORS.black}`,
                }}
              >
                <div className="grid-block">
                  Access to a three hour masterclass (live on Zoom), a PDF with
                  the workshop notes, a recording of the workshop, and a Q&A
                  session.
                </div>
                <div
                  style={{
                    borderTop: `1px solid ${COLORS.black}`,
                  }}
                >
                  <div
                    className="grid-block"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Size</p>
                    <p>1.08 KB</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-block" style={{ flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <h3>Ratings</h3>
                <p
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <IoMdStar size={20} />
                  {Math.round((reviews.totalStars / reviews.countStars) * 100) /
                    100}
                  (
                  {reviews.countStars > 1 || reviews.countStars === 0
                    ? reviews.countStars + " ratings"
                    : reviews.countStars + " rating"}
                  )
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "15px",
                  gap: "10px",
                  width: "100%",
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      width: "100%",
                      gap: "10px",
                    }}
                  >
                    <p>5 stars</p>
                    <LinearProgress
                      variant="determinate"
                      value={
                        (reviews.star5count * 100) / reviews.countStars || 0
                      }
                      sx={{
                        width: "68%",
                        height: "15px",
                        borderRadius: "0.25rem",
                        border: "1px solid black",
                        backgroundColor: "white",
                        ".MuiLinearProgress-barColorPrimary": {
                          backgroundColor: COLORS.pink,
                        },
                      }}
                    />
                    {Math.floor(
                      (reviews.star5count * 100) / reviews.countStars
                    ) || 0}
                    %
                  </div>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      width: "100%",
                      gap: "10px",
                    }}
                  >
                    <p>4 stars</p>
                    <LinearProgress
                      variant="determinate"
                      value={
                        (reviews.star4count * 100) / reviews.countStars || 0
                      }
                      sx={{
                        width: "68%",
                        height: "15px",
                        borderRadius: "0.25rem",
                        border: "1px solid black",
                        backgroundColor: "white",
                        ".MuiLinearProgress-barColorPrimary": {
                          backgroundColor: COLORS.pink,
                        },
                      }}
                    />
                    {Math.floor(
                      (reviews.star4count * 100) / reviews.countStars
                    ) || 0}
                    %
                  </div>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      width: "100%",
                      gap: "10px",
                    }}
                  >
                    <p>3 stars</p>
                    <LinearProgress
                      variant="determinate"
                      value={
                        (reviews.star3count * 100) / reviews.countStars || 0
                      }
                      sx={{
                        width: "68%",
                        height: "15px",
                        borderRadius: "0.25rem",
                        border: "1px solid black",
                        backgroundColor: "white",
                        ".MuiLinearProgress-barColorPrimary": {
                          backgroundColor: COLORS.pink,
                        },
                      }}
                    />
                    {Math.floor(
                      (reviews.star3count * 100) / reviews.countStars
                    ) || 0}
                    %
                  </div>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      width: "100%",
                      gap: "10px",
                    }}
                  >
                    <p>2 stars</p>
                    <LinearProgress
                      variant="determinate"
                      value={
                        (reviews.star2count * 100) / reviews.countStars || 0
                      }
                      sx={{
                        width: "68%",
                        height: "15px",
                        borderRadius: "0.25rem",
                        border: "1px solid black",
                        backgroundColor: "white",
                        ".MuiLinearProgress-barColorPrimary": {
                          backgroundColor: COLORS.pink,
                        },
                      }}
                    />
                    {Math.floor(
                      (reviews.star2count * 100) / reviews.countStars
                    ) || 0}
                    %
                  </div>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      width: "100%",
                      gap: "10px",
                    }}
                  >
                    <p style={{ width: "43px" }}>1 star</p>
                    <LinearProgress
                      variant="determinate"
                      value={
                        (reviews.star1count * 100) / reviews.countStars || 0
                      }
                      sx={{
                        width: "68%",
                        height: "15px",
                        borderRadius: "0.25rem",
                        border: "1px solid black",
                        backgroundColor: "white",
                        ".MuiLinearProgress-barColorPrimary": {
                          backgroundColor: COLORS.pink,
                        },
                      }}
                    />
                    {Math.floor(
                      (reviews.star1count * 100) / reviews.countStars
                    ) || 0}
                    %
                  </div>
                </Box>
              </div>
            </div>
            <div className="grid-block" style={{ flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <h3>Reviews</h3>
                {reviews.reviews.length > 1 || reviews.reviews.length === 0 ? (
                  <p>{reviews.reviews.length} reviews</p>
                ) : (
                  <p>{reviews.reviews.length} review</p>
                )}
              </div>
              <div
                style={{
                  width: "100%",
                }}
              >
                {reviews.reviews.slice(0, 3).map((review) => (
                  <div
                    style={{
                      padding: "1rem",
                      border: `1px solid ${COLORS.black}`,
                      borderRadius: "0.25rem",
                      marginTop: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "10px",
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        <p style={{ fontWeight: "bold" }}>Verified purchase</p>
                        <ReactStars
                          count={5}
                          value={review.stars}
                          size={24}
                          color2={"#000000"}
                          edit={false}
                        />
                      </div>
                      <p style={{ fontStyle: "italic" }}>{review.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
              {reviews.reviews.length > 3 && (
                <p
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={() => alert("Will open dialog with all reviews")}
                >
                  See all reviews
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Powered by</p>
        <img className="footer-image" src={gumroad} />
      </div>
    </div>
  );
}

export default Product;
