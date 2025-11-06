# على Windows (cmd)
if exist constants\index.ts (
    for %%I in (constants\index.ts) do (
        if %%~zI NEQ 0 (
            echo "constants/index.ts exists and is not empty"
        ) else (
            echo "constants/index.ts exists but is empty"
        )
    )
) else (
    echo "constants/index.ts does not exist"
)
