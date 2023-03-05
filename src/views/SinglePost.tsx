import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Skeleton,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useStyles from "../assets/styles/styles";
import { useGetPostByIdQuery } from "../services/news";
import getRandomImg from "../utils/getRandomImg";

const SinglePost = () => {
  let { id } = useParams<{ id: any }>();
  const classes = useStyles();
  const { data: post } = useGetPostByIdQuery(String(id));
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  useEffect(() => {
    const randomImg = getRandomImg(id);
    setImgUrl(randomImg);
  }, []);

  return (
    <Container sx={{ my: 12 }}>
      <Card sx={{ maxWidth: "100%" }}>
        {imgUrl ? (
          <Box sx={{ position: "relative" }}>
            <CardMedia component="img" height="440" src={imgUrl} />
            <Typography
              className={classes.title}
              gutterBottom
              variant="h3"
              component="div"
              color="white"
              sx={{
                position: "absolute",
                bottom: 2,
                left: 2,
                p: 1,
                textTransform: "capitalize",
              }}
            >
              {post?.title}
            </Typography>
          </Box>
        ) : (
          <Skeleton variant="rectangular" height={440} />
        )}

        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            display="grid"
            gap={4}
          >
            <Typography variant="h6">{post?.body}</Typography>
            <Typography component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum non est vel libero ultricies rhoncus ac dapibus ex. Ut
              fermentum eget nunc non fermentum. Pellentesque sed tortor velit.
              Sed non odio tellus. Sed augue nibh, faucibus a interdum quis,
              convallis in mi. Nullam sed sapien urna. Pellentesque ultricies
              libero eu nisl auctor maximus. Mauris venenatis lectus eget
              commodo malesuada. Phasellus et venenatis augue. In lacinia odio
              ante, ut pellentesque velit convallis eu. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Maecenas quis malesuada felis, at rutrum odio. Sed
              magna nibh, molestie non elit sit amet, fringilla eleifend diam.
              Mauris efficitur ut diam sed efficitur.`
            </Typography>
            <Typography component="p">
              Sed volutpat ullamcorper est non rutrum. Phasellus blandit sed
              ipsum et sollicitudin. Sed auctor, nunc vel dapibus malesuada, leo
              felis mollis elit, nec tempor arcu erat quis tortor. Mauris
              tristique justo nisl, vitae tristique erat dignissim a. Fusce
              ullamcorper sed eros vel semper. Vestibulum at pellentesque
              turpis, sit amet eleifend purus. Donec vehicula quam vitae purus
              bibendum, quis imperdiet augue sollicitudin. In ut sodales nibh.
              Vivamus tempus nibh in tellus malesuada condimentum. Donec vitae
              odio elementum libero luctus sollicitudin id id metus. In
              porttitor nunc nunc, sit amet venenatis tortor accumsan ac.
              Vivamus commodo cursus neque quis consequat. Donec lectus quam,
              consectetur a posuere a, fringilla sit amet nisl. Morbi dictum
              neque nec mauris aliquam euismod. Suspendisse potenti.
            </Typography>
            <Typography component="p">
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean eu mi posuere, lacinia felis eget,
              tincidunt sapien. Praesent tincidunt in tortor quis pharetra.
              Proin vulputate sagittis ex, ac accumsan est sagittis vel. Nam
              sollicitudin tristique bibendum. In augue ex, vulputate eget mi
              eu, ornare hendrerit quam. Fusce efficitur ante ullamcorper
              interdum tempor. Vivamus at eleifend ex, sed gravida libero. Sed
              tempor in libero id finibus. Fusce augue risus, congue a lectus
              ac, feugiat lobortis lorem. Aenean a gravida metus. Aliquam
              blandit arcu quis scelerisque ultrices. Duis sem lectus, imperdiet
              sit amet porta vel, commodo nec neque. Ut rhoncus lorem blandit
              lorem iaculis dignissim a quis lectus. Vestibulum porttitor leo et
              mi tristique, quis euismod ex accumsan. Maecenas faucibus leo at
              diam porta ullamcorper. Sed nibh felis, venenatis eget enim sed,
              efficitur rutrum est. Proin sodales orci a vulputate venenatis.
              Phasellus rutrum interdum
            </Typography>
            <Typography component="p">
              Sed fermentum felis diam, a fermentum turpis iaculis id. Maecenas
              eget lectus facilisis, scelerisque tellus nec, viverra lectus.
              Praesent faucibus enim ac luctus laoreet. Mauris erat mauris,
              aliquet ut libero eget, venenatis sagittis lacus. Mauris nec
              ultrices orci. Aenean nulla mi, dignissim et lorem non, dapibus
              semper arcu. Proin a justo vestibulum, scelerisque turpis nec,
              porttitor orci. Donec fermentum, nibh non aliquam efficitur,
              ligula ante fermentum nibh, quis mattis dui nunc et neque. Etiam
              faucibus eros diam, eu iaculis nisi varius lacinia. Mauris est
              ante, molestie nec nunc vel, eleifend facilisis quam. Vivamus
              tincidunt cursus sem, non vestibulum nisi. Quisque dignissim
              hendrerit massa id luctus. Donec in tristique mauris, vestibulum
              hendrerit urna. Phasellus luctus eleifend justo non pharetra.
              Aliquam ornare risus massa. Aliquam vehicula, nisl in sodales
              laoreet, erat felis feugiat nisl, sit amet mollis dolor erat
              dignissim diam
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SinglePost;
