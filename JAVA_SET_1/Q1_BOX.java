class Box{
    int length;
    int width;
    int height;

    Box(){
        length = width = height = 1;
    }

    Box(int a){
        length = width = height = a;
    }

    Box(int l, int w, int h){
        length = l;
        width = w;
        height = h;
    }

    int volume(){
        return length * width * height;
    }


    public static void main(String[] args) {
        Box b1 = new Box();
        Box b2 = new Box(10);
        Box b3 = new Box(10, 20, 30);

        System.out.println("Volume of Box 1: " + b1.volume());
        System.out.println("Volume of Box 2: " + b2.volume());
        System.out.println("Volume of Box 3: " + b3.volume());
    }
}