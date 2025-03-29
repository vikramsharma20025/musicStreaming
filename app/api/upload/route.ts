import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
    try {
        // Parse the form data
        const formData = await req.formData();
        const audioFile = formData.get('audio') as File;

        if (!audioFile) {
            return NextResponse.json({ error: 'No audio file uploaded' }, { status: 400 });
        }

        // Define the upload directory
        const uploadDir = path.join(process.cwd(), 'uploads');
        await fs.mkdir(uploadDir, { recursive: true });

        // Save the file to the upload directory
        const filePath = path.join(uploadDir, audioFile.name);
        const fileBuffer = Buffer.from(await audioFile.arrayBuffer());
        await fs.writeFile(filePath, fileBuffer);

        return NextResponse.json({ message: 'Audio file uploaded successfully', filePath });
    } catch (error) {
        console.error('Error uploading audio file:', error);
        return NextResponse.json({ error: 'Failed to upload audio file' }, { status: 500 });
    }
}
