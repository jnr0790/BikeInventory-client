curl "http://localhost:4741/bikes" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
