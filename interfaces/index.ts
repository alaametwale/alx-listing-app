# على Windows (cmd)
if exist interfaces\index.ts (
    for %%I in (interfaces\index.ts) do (
        if %%~zI NEQ 0 (
            echo "interfaces/index.ts exists and is not empty"
        ) else (
            echo "interfaces/index.ts exists but is empty"
        )
    )
) else (
    echo "interfaces/index.ts does not exist"
)
