import { Container, Box, Avatar, Typography, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/reducers/auth";
import getRandomImg from "../utils/getRandomImg";

const ProfilePage = () => {
  const user = useSelector(selectUser);
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  useEffect(() => {
    const randomImg = getRandomImg(1);
    setImgUrl(randomImg);
  }, []);
  return (
    <Container
      sx={{ display: "grid", placeItems: "center", my: 32, width: "100%" }}
    >
      {user && (
        <Paper
          elevation={4}
          sx={{ position: "absolute", p: 6, pt: 12, gap: 2, display: "grid" }}
        >
          {imgUrl && (
            <Avatar
              src={imgUrl}
              sx={{
                position: "absolute",
                top: -60,
                placeSelf: "center",
                width: 120,
                height: 120,
              }}
            />
          )}{" "}
          <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="h6" fontWeight="200">
              Username:
            </Typography>

            <Typography variant="h6">{user.username}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="h6" fontWeight="200">
              Name:
            </Typography>

            <Typography variant="h6">{user.name}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="h6" fontWeight="200">
              Email:
            </Typography>

            <Typography variant="h6">{user.email}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="h6" fontWeight="200">
              Address:
            </Typography>

            <Typography variant="h6">{user.address}</Typography>
          </Box>
        </Paper>
      )}
    </Container>
  );
};

export default ProfilePage;
