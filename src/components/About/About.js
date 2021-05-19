import React from "react";
import BossContainer from "../BossContainer";

// import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import Header from './components/About/Header';
// import MainFeaturedPost from './components/About/MainFeaturedPost';
// import FeaturedPost from './FeaturedPost';
// import Main from './components/About/Main';
// import Sidebar from './components/About/Sidebar';
// import Footer from './components/About/Footer';



function About() {
  return (
    <BossContainer>
      <h1 style={{textAlign: 'center'}}>About Us</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
        condimentum suscipit aliquam. In finibus hendrerit libero, ut
        ullamcorper urna lobortis vitae. Donec cursus et ligula ut pulvinar.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Pellentesque id scelerisque nunc, ac congue lectus.
        Mauris auctor egestas lectus ut fermentum. Sed eu est consequat,
        pulvinar turpis quis, hendrerit lectus. In ultricies viverra mi vel
        dapibus. Maecenas ut tellus id urna hendrerit euismod. Duis porta risus
        eu vehicula eleifend. Etiam lectus leo, pretium at commodo ultrices,
        tempor eget enim. Nunc nec imperdiet augue. Sed tempor efficitur
        fringilla. Duis aliquam, turpis id efficitur interdum, justo quam
        molestie lectus, ac tristique eros nisl eget neque. Nam nec magna
        ornare, ultrices dui id, consequat dolor. In gravida magna in aliquet
        imperdiet. Aliquam erat volutpat. Mauris ultrices ac ipsum sed
        consequat. Cras in mauris magna. Donec in quam in eros bibendum
        sollicitudin. Sed vitae pulvinar elit, in mollis leo. Pellentesque
        varius sapien tortor, et dictum augue tempor id. Maecenas malesuada diam
        molestie mauris ullamcorper, sed pharetra erat vestibulum. Fusce sit
        amet leo at mauris efficitur dictum ut vitae tortor. Donec vel facilisis
        ligula. Ut dignissim urna at tellus vestibulum rhoncus commodo id risus.
        Morbi facilisis bibendum maximus. Mauris pharetra ex quis ipsum
        tincidunt, a ultrices sem pulvinar. Aliquam vulputate feugiat dapibus.
        Vivamus rhoncus et erat at porta. Vestibulum dapibus turpis at lectus
        pharetra consectetur.
      </div>
    </BossContainer>
  );
}

// const useStyles = makeStyles((theme) => ({
//   mainGrid: {
//     marginTop: theme.spacing(3),
//   },
// }));

// const sections = [
//   { title: 'Technology', url: '#' },
//   { title: 'Design', url: '#' },
//   { title: 'Culture', url: '#' },
//   { title: 'Business', url: '#' },
//   { title: 'Politics', url: '#' },
//   { title: 'Opinion', url: '#' },
//   { title: 'Science', url: '#' },
//   { title: 'Health', url: '#' },
//   { title: 'Style', url: '#' },
//   { title: 'Travel', url: '#' },
// ];

// const mainFeaturedPost = {
//   title: 'Title of a longer featured blog post',
//   description:
//     "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
//   image: 'https://source.unsplash.com/random',
//   imgText: 'main image description',
//   linkText: 'Continue reading…',
// };

// const featuredPosts = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
// ];

// const posts = [post1, post2, post3];

// const sidebar = {
//   title: 'About',
//   description:
//     'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
//   archives: [
//     { title: 'March 2020', url: '#' },
//     { title: 'February 2020', url: '#' },
//     { title: 'January 2020', url: '#' },
//     { title: 'November 1999', url: '#' },
//     { title: 'October 1999', url: '#' },
//     { title: 'September 1999', url: '#' },
//     { title: 'August 1999', url: '#' },
//     { title: 'July 1999', url: '#' },
//     { title: 'June 1999', url: '#' },
//     { title: 'May 1999', url: '#' },
//     { title: 'April 1999', url: '#' },
//   ],
//   social: [
//     { name: 'GitHub', icon: GitHubIcon },
//     { name: 'Twitter', icon: TwitterIcon },
//     { name: 'Facebook', icon: FacebookIcon },
//   ],
// };

// export default function Blog() {
//   const classes = useStyles();

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="lg">
//         <Header title="Blog" sections={sections} />
//         <main>
//           <MainFeaturedPost post={mainFeaturedPost} />
//           <Grid container spacing={4}>
//             {featuredPosts.map((post) => (
//               <FeaturedPost key={post.title} post={post} />
//             ))}
//           </Grid>
//           <Grid container spacing={5} className={classes.mainGrid}>
//             <Main title="From the firehose" posts={posts} />
//             <Sidebar
//               title={sidebar.title}
//               description={sidebar.description}
//               archives={sidebar.archives}
//               social={sidebar.social}
//             />
//           </Grid>
//         </main>
//       </Container>
//       <Footer title="Footer" description="Something here to give the footer a purpose!" />
//     </React.Fragment>
//   );
// }

export default About;

