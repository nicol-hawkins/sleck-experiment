// import React, { Component } from 'react';
// import './Project.css';


// class Project extends Component {
//   state = {
//     projectNames: [],
//   }

//   componentDidMount() {
//     this.fetchProjects();
//   }

//   fetchProjects() {
//     console.log('Fetching data from API');
//     fetch('/api/mongodb/projects/')
//       .then(response => response.json())
//       .then(data => {
//         console.log('Got data back', data);
//         this.setState({
//           projectNames: data,
//         });
//       });
//   }

//   deleteArticle(documentId) {
//     console.log('Sending DELETE for', documentId);
//     // Do the DELETE, using "?_id=" to specify which document we are deleting
//     fetch('/api/mongodb/projects/?_id=' + documentId, {
//         method: 'DELETE',
//       })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Got this back', data);

//         // Call method to refresh data
//         this.fetchProjects();
//       });
//   }



//   render() {
//     return (
      
//       <div className="Project">
//         <h1>my script project</h1>
//         {
//           this.state.projectNames.map((post, index) => (
//             <div className="Project-card" key={post._id}>

//               <h1>{post.title}</h1>
//               <p>{post.text}</p>

//               <div className="Project-articleActions">
//                 <div onClick={() => this.deleteArticle(post._id)}>
//                   <span alt="delete this">🗑</span>
//                 </div>
//               </div>
//             </div>
//           ))
//         }
        

        
//       </div>
//     );
//   }
// }

// export default Project;
