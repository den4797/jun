import styled from 'styled-components';

const Comments = styled.div`
  
  .left {
    text-align: left;
  }
  
  .right {
    text-align: right;
  }
  
  .like {
    max-width: 100px;
    right: 400px;
    position: absolute;
    top: 0%;
    left: 800px;
  }
`;

const AddComment = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  text-align: center;
`;

export default { Comments, AddComment };
