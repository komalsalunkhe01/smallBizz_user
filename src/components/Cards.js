import { Grid, Card, CardContent, CardMedia, Typography, styled } from "@mui/material";

const CardStyle = styled(Card)`
  margin: 20px;
  height: 42vh;
  width: 200px; /* Set a fixed width for the card */
`;


const GridStyle = styled(Grid)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 20px;
`;

const Container = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SmallCardContent = styled(CardContent)`

  padding: 10px; /* Adjust padding as needed */
`;

const SmallTypography = styled(Typography)`
  font-size: 16px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;


const Cards = ({ products }) => {
  return (
    <Container>
      <GridStyle container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id}>
            <CardStyle>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <SmallCardContent>
                <SmallTypography variant="h6" component="div">
                  {product.name}
                </SmallTypography>
              </SmallCardContent>
            </CardStyle>
          </Grid>
        ))}
      </GridStyle>
    </Container>
  );
};

export default Cards;
