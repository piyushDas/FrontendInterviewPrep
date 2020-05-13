// 10, 1, 3 - 7 14 21

/*
    He- 
    ll
    oW
    o
    r
    l
    d
    size  = 2,2,2,1,1,1,1
    
    H 
    
    el
    lo
    Wo
    r
    l
    
    d
*/

funtion getColorDist (str) {
    const colorMap= [
        {type: V, str:["H", "e"]},
{type: I, str:["l", "l"]},
        .{type: B, str:["o", "W"]},
        .{type:G, str:["o"]}
        {type:Y, str:["r"]}
        {type:O, str:["l"]}
        .
    ]
    
    let nonSpacedStr = str.split(" ").join("")

    /*
    let size = Math.floor(nonSpacedStr.length / 7)
    let extra = nonSpacedStr.length % 7
    let prevExtra = extra
    const initialExtra = extra
    let currentbox = 1
    for (let index=0; index<nonSpacedStr.length; index++ ) {
        colorMap[currentbox - 1].str.push(nonSpacedStr[index])
        if (extra > 0 && prevExtra === extra ) {
            extra -= 1
        } else if ((index + 1 - (initialExtra - extra)) % size === 0) {
           currentbox += 1    
        }
    }
    */
    const size = 5
    let count = [1,1,1,1,1]
    nonSpacedStr = nonSpacedStr.subStr(1, nonSpacedStr.length - 2)
    for (let index=0; index<nonSpacedStr.length; index++ ) {
       count[index % size] += 1 
    }
    count = [1, ...count, 1]
    //   count = [2,2,2,1,1]
    let start = 0
    for (let index=0; index<nonSpacedStr.length; index++ ) {
        if (count[start] > 0) {
            colorMap[start].str.push(nonSpacedStr[index])
        } else {
            start += 1 
        }
    }
    
    return colorMap
  }
  
  
  
  /*
      findDOMnode
      
      a {
          val,
          next: [b, c, d]
      }
      
      b {
          val,
          next
      }
  
  */
  
  const findDOMnode = (node, val, index) => {
       if (node.val === val) {
           return true
       } else if (node.next[index]){
           return findDOMnode(node.next[index], val, index)
       } else if (node.nex.length && node.next.length > index) {
           index += 1
           return findDOMnode(node.next[index], val, index)
       } else {
           return false
       }
  }
  
  
  findDOMnode(root, 'a', 0)
  
  
  const compareTree = (tree1, tree2, id) => {
      
  
  }




/*
  a -> b  ---> root.next[index].next[index]
    -> c
    -> d
    
    path
    
  e -> f ----> root.next[index].mext[index]
    -> g
    -> h
    
    
*/

function findNode(rootA, rootB, nodeA) {
    let nodeB = null;
    const path = findPath(rootA, nodeA, 0, 0)
    nodeB = traversePath(path)
    
    return nodeB;
  }
  
  
  
  const b = {
    val: "b",
    next: null
  }
  
  const d = {
    val: "d"
  } // -----> a.next[1].next[0]
  
  const c = {
    val: "c",
    next: [d]
  }
  
  
  
  const a = {
    val: "a",
    next: [b, c, d]
  }
  
  function findPath (node, val, level, index) {
    if (node.val === val) {
      return [level, index]  
    }  else if (node.next && node.next[index]) {
       return findPath(node.next[index], val, level++, index)
    } else if(node.next && node.next.length && node.next.length > index) {
      return findPath(node.next[index], val, level, index++)
    }
  } 
  
  function traversePath(path) {
    // level, children index
  }
  
  findPath(a, "d", 0, 0) //---> [1, 1])