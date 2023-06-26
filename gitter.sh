echo "Enter commit message:"
read commit_message
echo "Push to prod?(y/n)"
read val

if [ "$val" = "n" ]; then
    git add .
    git commit -m "$commit_message"
    git push
    exit

else
    if [ "$val" = "y"]; then
        npm run deploy
        echo "Done"
    fi
fi
