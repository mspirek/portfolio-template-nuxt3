export default function(doc) {
  if (doc.type === 'portfolio_item') {
    return '/work/' + doc.uid;
  }
  return '/';
}
