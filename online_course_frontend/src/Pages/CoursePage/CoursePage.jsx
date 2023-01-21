import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import introVideo from "../../assets/videos/courseIntro.mp4";
export const CoursePage = () => {
  //! Below Variable will be mapped throw the array later
  const [lectureNumber, setlectureNumber] = useState(0);
  const lectures = [
    {
      _id: "id",
      title: "sample",
      description: "krishan",
      video: {
        url: "httpskrisha",
      },
    },
    {
      _id: "id2",
      title: "sample2",
      description: "kumar",
      video: {
        url: "httpskrisha",
      },
    },
    {
      _id: "id3",
      title: "sample3",
      description: "safi",
      video: {
        url: "httpskrisha",
      },
    },
  ];

  return (
    <Grid minHeight={"90vh"} templateColumns={["1fr", "3fr 1fr"]}>
      <Box>
        <video
          width={"100%"}
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          src={introVideo}
        ></video>
        <Heading
          m="4"
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />
        <Heading m="4" children={lectures[lectureNumber].description} />
      </Box>
      <VStack>
        {lectures.map((item, index) => (
          <button
            onClick={() => setlectureNumber(index)}
            style={{
              width: "100%",
              padding: "1rem",
              textAlign: "center",
              margin: "0",
              borderBottom: "1px solid rgb(0,0,0,0.2)",
            }}
            key={item._id}
          >
            <Text noOfLines={1}>
              #{index + 1} {item.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};
