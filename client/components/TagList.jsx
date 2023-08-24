import React from 'react';
import '../style.css';
import './TagList.css';
import styled from '@emotion/styled';

// this seems to be the code to handle the form in the middle of the page. We are passing the props(objects)
// from App.jsx here to be able to render the functionality

// we don't need TextArea or Input for TagList, but keeping for now for styled-component reference
// const TextArea = styled.textarea``;
// const Input = styled.input``;

const TagList = ((props) => {

    // props passed down from App
  const {
    tag,
    onChange
  } = props;

  // switch statement which uses tag state property to determine which radio button should be selected when a problem is opened
  let recursionChecked, oopChecked, closureChecked, hofChecked, llChecked, asyncChecked, bstChecked = false;
  switch(tag) {
    case 'recursion': 
        recursionChecked = true;
        break;
    case 'oop': 
        oopChecked = true;
        break;
    case 'closure': 
        closureChecked = true;
        break;
    case 'hof': 
        hofChecked = true;
        break;
    case 'll': 
        llChecked = true;
        break;
    case 'async': 
        asyncChecked = true;
        break;
    case 'bst': 
        bstChecked = true;
        break;
    default:
        break;
    
  }

  return (
  // 
  
    <fieldset>
        <legend>Challenge tag:</legend>

        <div>
            <input type="radio" id="recursion-tag" name="tag-radio" value="recursion" checked={recursionChecked} onChange={(e) => onChange('tag', e.target.value)} />
            <label for="recursion-tag">Recursion</label>
        </div>

        <div>
            <input type="radio" id="oop-tag" name="tag-radio" value="oop" checked={oopChecked} onChange={(e) => onChange('tag', e.target.value)} />
            <label for="oop-tag">Object Oriented Programming (OOP)</label>
        </div>

        <div>
            <input type="radio" id="closure-tag" name="tag-radio" value="closure" checked={closureChecked} onChange={(e) => onChange('tag', e.target.value)} />
            <label for="closure-tag">Closure</label>
        </div>

        <div>
            <input type="radio" id="hof-tag" name="tag-radio" value="hof" checked={hofChecked} onChange={(e) => onChange('tag', e.target.value)} />
            <label for="hof-tag">Higher Order Function</label>
        </div>

        <div>
            <input type="radio" id="ll-tag" name="tag-radio" value="ll" checked={llChecked} onChange={(e) => onChange('tag', e.target.value)} />
            <label for="ll-tag">Linked List</label>
        </div>

        <div>
            <input type="radio" id="async-tag" name="tag-radio" value="async" checked={asyncChecked} onChange={(e) => onChange('tag', e.target.value)} />
            <label for="async-tag">Async</label>
        </div>

        <div>
            <input type="radio" id="bst-tag" name="tag-radio" value="bst" checked={bstChecked} onChange={(e) => onChange('tag', e.target.value)} />
            <label for="bst-tag">Binary Search Tree (BST)</label>
        </div>
    </fieldset>
  )
}
);

export default TagList;