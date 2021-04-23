curl "http://localhost:4741/bikes" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "bike": {
      "brand": "'"${BRAND}"'",
      "model": "'"${MODEL}"'",
      "type": "'"${TYPE}"'",
      "color": "'"${COLOR}"'"
    }
  }'

echo
