import styled from 'styled-components';

const Comments = styled.div`
  
  .left {
    text-align: left;
  }
  
  .right {
    text-align: right;
  }
  
  .like {
    position: absolute;
    top: 0%;
    right: 0%;
  }
`;

const AddComment = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  text-align: center;
`;

export default { Comments, AddComment };
