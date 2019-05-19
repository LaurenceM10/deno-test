const { args } = Deno;

let filename = args[1];

async function reafFile() {
    // Open file based in args filename
    let file = await Deno.open(filename);

    // Use stdout to print the file content
    await Deno.copy(Deno.stdout, file);

    // Close fsFile resource
    Deno.close(5);
}

reafFile();