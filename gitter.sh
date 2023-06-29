echo "Enter commit message:"
read commit_message
git add .
git commit -m "feat: $commit_message"
git push
