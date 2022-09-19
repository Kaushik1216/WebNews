import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading';
import propTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class news extends Component {
   static defaultProps ={
    pageSize:6,
    country:'in',
    category:'general'
   }
   static propTypes={
    pageSize:propTypes.number,
    country:propTypes.string,
    category:propTypes.string
   }
 capitalize=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
 
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      article: [],
      page :1,
      totalResults:0

    };document.title=`News Today | ${this.capitalize(this.props.category)}`;
  }
  
  async componentDidMount(){
    this.props.setProgress(15);
    try{ 
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;   
      this.setState({loading:true});    
        const res = await fetch(url);
        const data = await res.json();
    this.props.setProgress(50);
        this.setState({
            article: data.articles,
          
            loading:false,
            totalResults:data.totalResults
        });
    this.props.setProgress(100);
    }
    catch(error) {
        console.log("something is not working");
    }
}
// prevPage = async()=>{
//   try{   
//     console.log("previos");  
//     let url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
//     this.setState({loading:true});
//     const res = await fetch(url);
//     const data = await res.json();
    
//     this.setState({
//         page:this.state.page -1,
//         article: data.articles,
//         loading:false,
//         totalResults:data.totalResults
//     });
// }
// catch(error) {
  
//     console.log("something is not working");
// }
// }
// nextPage = async()=>{
//   try{   
//     if(this.state.page +1 >Math.ceil(this.state.totalResult/this.props.pageSize)){

//     }
//     else{
//     console.log("next");
//     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//     this.setState({loading:true})
//     const res = await fetch(url);
//     const data = await res.json();
//     this.setState({
//       page:this.state.page +1,
//         article: data.articles,
//         loading:false,
//         totalResults:data.totalResults
//     });}
// }
// catch(error) {
//     console.log("something is not working");
// }
// }
fetchMoreData=async()=>{
  this.setState({page:this.state.page+1});
  try{ 
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;   
    this.setState({loading:true});    
      const res = await fetch(url);
      const data = await res.json();
      this.setState({
          article: this.state.article.concat(data.articles),
        
          loading:false,
          totalResults:data.totalResults
      });
  }
  catch(error) {
      console.log("something is not working");
  }
 
}
  render() {
  
    return (
      <>
      <div className="container">
      <h2 className='mb-5'>News Today Top  {this.capitalize(this.props.category)} Headlines</h2></div>
      <div className='container mt-6'>
        {this.state.loading && <Loading/>}
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length!==this.state.totalResults}
          loader={<Loading/>}
          >
     
        <div className="container">
        <div className="container">
      <h2 className='mb-5'>News Today Top  {this.capitalize(this.props.category)} Headlines</h2></div>
        <div className="row">

       { this.state.article.map((element)=>{
         return  <div className="col-md-4  mb-3" key={element.url}>
          <Newsitem title={element.title?element.title:""} description={element.description?element.description.slice(0,(150-((element.title.length)*1.5))):((" ").repeat(150-(element.title.length)))} imgUrl={element.urlToImage} url={element.url}
          author={element.author} date={element.publishedAt} name={element.source.name} />
          </div>
       
       })} 
        </div>
        </div>
        </InfiniteScroll>
     {/* <div className="container d-flex justify-content-between">
      <div className="btn btn-info" disabled={this.page<=1} onClick={this.prevPage}> &laquo; Previous</div>
      <div className="btn btn-info" onClick={this.nextPage}>Next &raquo;</div>
     </div> */}
      </div>
      </>
    )
  }
}

export default news