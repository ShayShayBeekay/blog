import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react'
import moment from 'moment';

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.formattedDate = moment(this.props.date).toString();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        console.log('e.target: ',e.target);
        console.log('e.target.id: ',e.target.id);
        switch(e.target.id){
            case('prev'):
                this.props.handler('prev')
                break;
            case('next'):
                this.props.handler('next')
                break;
            default:
                return 0;
        }
    }

  render() {
    return (
      <Container text textAlign='justified'>
      <Button.Group attached='top'>
        {((this.props.index <=0 ) 
            ?(<Button disabled >Previous</Button>)
           :(<Button animated  onClick={this.handleClick.bind(this)}  id={'prev'}>
            Previous
            </Button>))
        }
        {((this.props.index >= (this.props.noOfPosts -1)) 
            ?(  <Button disabled >Next</Button>)
           :(   <Button animated  onClick={this.handleClick.bind(this)}  id={'next'}>
                    Next
                </Button>))
        }
        </Button.Group>
        <br/>
        <header>
            <h1>{this.props.title}</h1>
            {/* <h2>{this.props.date}</h2> */}
        </header>
        <div>
            <br/>
            {this.props.paragraphs.map(paragraph=>
                <p>{paragraph}</p>
            )}
        </div>
        <div>
            <br/>
            <p>{this.props.closing}</p>
        </div>
        <br/>
        <Button.Group attached='bottom'>
        {((this.props.index <=0 ) 
            ?(<Button disabled >Previous</Button>)
           :(<Button animated  onClick={this.handleClick.bind(this)}  id={'prev'}>
            Previous
            </Button>))
        }
        {((this.props.index >= (this.props.noOfPosts -1)) 
            ?(  <Button disabled >Next</Button>)
           :(   <Button animated  onClick={this.handleClick.bind(this)}  id={'next'}>
                    Next
                </Button>))
        }
        </Button.Group>
      </Container>
    );
  }
}

export default BlogPost;

