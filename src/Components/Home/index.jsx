import React, {useState, useEffect} from 'react';
import {
  Grid,
  Image,
  GridColumn,
  GridRow,
  Card,
  Button,
  Container
} from 'semantic-ui-react';
import './home.css';
import {getArticles} from '../../action/homeAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const Home = (props) => {
  const [descriptionLen, setDescriptionLength] = useState([]);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    props.getArticles();
  });

  useEffect(() => {
    setArticles(props.articles);
  }, [props.articles, setArticles]);

  const handleShowMore = (index) => {
    const newArray = [...descriptionLen];
    newArray[index] = !newArray[index];
    setDescriptionLength(newArray);
  };

  return (
    <div className="articleSection">
      <Container>
        <Grid>
          <GridRow className="articleRow" columns={3}>
            {
              articles && articles.map((innerObj, idx) => (
                <GridColumn>
                  <Card className="article">
                    <Image src={innerObj.image} wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>{innerObj.title}</Card.Header>
                      <Card.Meta>
                        <span className='date'>{innerObj.author}</span>
                      </Card.Meta>
                      <Card.Description>
                        {innerObj.description.substr(0, descriptionLen[idx] ? innerObj.description.length : 100)}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Button primary onClick={() => handleShowMore(idx)}>
                        {
                          descriptionLen[idx] ? 'Show Less' : 'Show More'
                        }
                      </Button>
                    </Card.Content>
                  </Card>
                </GridColumn>
              ))
            }
          </GridRow>
        </Grid>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles.articles
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getArticles
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
