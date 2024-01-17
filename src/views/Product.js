import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import ReactStars from "react-stars";
import TextField from "@mui/material/TextField";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

import { COLORS } from "../utils/colors";
import profile from "../images/ellie-horn.webp";
import gumroad from "../images/gumroad-text-black.png";
import { mockData } from "../mockData";
import { getReview } from "../api/reviews";
import ScrollToTop from "../components/ScrollToTop";

function Product() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReview({ productId: mockData._id });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
                  value={4}
                  size={24}
                  color2={"#000000"}
                  edit={false}
                />
                2 ratings
              </div>
              <div className="grid-block">2 reviews</div>
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
                3.0(2 ratings)
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
                      value={80}
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
                    100%
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
                    <p>5 stars</p>
                    <LinearProgress
                      variant="determinate"
                      value={80}
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
                    100%
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
                    <p>5 stars</p>
                    <LinearProgress
                      variant="determinate"
                      value={80}
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
                    100%
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
                    <p>5 stars</p>
                    <LinearProgress
                      variant="determinate"
                      value={80}
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
                    100%
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
                    <p>5 stars</p>
                    <LinearProgress
                      variant="determinate"
                      value={80}
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
                    100%
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
                <h3>Reviews</h3>2 reviews
              </div>
              <div>
                <div
                  style={{
                    flexDirection: "column",
                    borderRadius: "0.25rem",
                    border: `1px solid ${COLORS.black}`,
                  }}
                >
                  huuibiu
                </div>
              </div>
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
