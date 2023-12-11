let st=new Set();
st.add(69);
st.add(420);
st.add(699.99);
st.add("Tekashi69");
console.log(st);
for(let s of st)
    console.log(s);
console.log(st.has("tekashi69"));
console.log(st.delete(699.99));
st.clear();
console.log(st.size);
