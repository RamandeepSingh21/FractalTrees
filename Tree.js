class Tree{

    constructor(position, depth, length){

        this.position = position;
        this.branches = [];
        this.leafBranches = [];
        this.GrowthValues = {D : 0.9, A : 60, N : 3};
        this.length = length;
        
        this.branches[0] = new Branch(this.position, new Vector2(0, -1), this.length, {r: 255, g : 255, b : 255});
        this.leafBranches[0] = this.branches[0];

        for(let i=0;i<depth-1;i++){

            this.GrowTree();
        }        
        
    }

    GrowTree(){

        let leafBranches = [];
        for(let i=0;i<this.leafBranches.length;i++){

            let branches = this.leafBranches[i].GrowBranches(this.GrowthValues.D, this.GrowthValues.A, this.GrowthValues.N);
            if(branches != null){

                for(let j=0;j<branches.length;j++){

                    leafBranches.push(branches[j]);
                    this.branches.push(branches[j]);
                }
            } else leafBranches.push(this.leafBranches[i]);
        }

        this.leafBranches = leafBranches;
    }
    

    RecreateTree(D, A, N, depth, length){

        this.branches = [];
        this.leafBranches = [];
        this.GrowthValues.D = D;
        this.GrowthValues.A = A;
        this.GrowthValues.N = N;
        this.length = length;
        this.branches[0] = new Branch(this.position, new Vector2(0, -1), this.length, {r: 255, g : 255, b : 255});
        this.leafBranches[0] = this.branches[0];

        for(let i=0;i<depth-1;i++){

            this.GrowTree();
        }   
    }

    Show(ctx){

        for(let i=0;i<this.branches.length;i++){

            this.branches[i].Show(ctx);
        }
    }
}