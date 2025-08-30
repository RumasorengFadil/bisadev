export async function POST() {
  // try {
  //   const body = await req.json();

  //   const errors: Record<string, string> = {};

  //   console.log(body);
    
  //   if (!body.title) {
  //     errors.title = "The title field can't be empty.";
  //   }
  //   if (!body.content) {
  //     errors.content = "The content field can't be empty.";
  //   }
  //   if (!body.tags.length) {
  //     errors.tags = "The tags field can't be empty.";
  //   }
  //   if (!body.thumbnail) {
  //     errors.thumbnail = "The thumbnail field can't be empty.";
  //   }
  //   if (body.thumbnail.size > 4 * 1024 * 1024) {
  //     errors.thumbnail = "Thumbnail must not exceed 4 MB!";
  //   }
  //   if (!body.categoryId) {
  //     errors.categoryId = "The category field can't be empty.";
  //   }

  //   // Kalau ada error, kembalikan sekaligus
  //   if (Object.keys(errors).length > 0) {
  //     return NextResponse.json({ errors }, { status: 400 });
  //   }

  //   // Simulasi simpan ke DB
  //   const res = await axiosServer("api/blog/store", {method:"POST"});
  //   console.log(res);
  //   return NextResponse.json(
  //     { message: "Post created successfully" },
  //     { status: 200 }
  //   );
  // } catch (error) {
  //   return NextResponse.json(
  //     { error: "Failed to Fetch Posts" },
  //     { status: 500 }
  //   );
  // }
}
